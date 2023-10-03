import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { cx } from 'class-variance-authority'
import { Command } from 'cmdk'
import { matchSorter } from 'match-sorter'
import { intersectionBy } from 'lodash'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { Input, InputGroup } from '@spark-ui/input'
import { Kbd } from '@spark-ui/kbd'
import { Dialog } from '@spark-ui/dialog'
import { Search as SearchIcon } from '@spark-ui/icons/dist/icons/Search'
import { CvFill as CvFillIcon } from '@spark-ui/icons/dist/icons/CvFill'
import { CvOutline as CvOutlineIcon } from '@spark-ui/icons/dist/icons/CvOutline'
import { ArrowVerticalRight as ArrowVerticalRightIcon } from '@spark-ui/icons/dist/icons/ArrowVerticalRight'
import { useUpdateEffect } from '@/hooks/useUpdateEffect'
import searchMeta from '@/config/search-meta.json'

interface SearchResultItem {
  content: string
  objectID: string
  url: string
  type: 'lvl1' | 'lvl2' | 'lvl3'
  hierarchy: {
    lvl1: string | null
    lvl2?: string | null
    lvl3?: string | null
  }
}

const MATCH_KEYS = ['hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3', 'content']
const MAX_RESULTS = 15

export function CmdK() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeItem, setActiveItem] = useState(0)
  const router = useRouter()
  const eventRef = useRef<'mouse' | 'keyboard'>()
  const results = useMemo<SearchResultItem[]>(
    function getResults() {
      if (query.length < 2) return []
      const data = searchMeta as SearchResultItem[]
      const words = query.split(' ')
      const matchesForEachWord = words.map(word =>
        matchSorter(data, word, {
          keys: MATCH_KEYS,
        }),
      )

      if (words.length === 1) {
        return matchSorter(data, query, {
          keys: MATCH_KEYS,
        }).slice(0, MAX_RESULTS)
      }

      const matches = intersectionBy(...matchesForEachWord, 'objectID').slice(0, MAX_RESULTS)

      return matches
    },
    [query],
  )

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()

        setIsOpen(!isOpen)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, setIsOpen])

  const onItemSelect = useCallback(
    (item: SearchResultItem) => {
      setIsOpen(false)
      router.push(item.url)
    },
    [router],
  )

  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      eventRef.current = 'keyboard'
      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault()
          if (activeItem + 1 < results.length) {
            setActiveItem(activeItem + 1)
          }
          break
        }
        case 'ArrowUp': {
          e.preventDefault()
          if (activeItem - 1 >= 0) {
            setActiveItem(activeItem - 1)
          }
          break
        }
        case 'Control':
        case 'Alt':
        case 'Shift': {
          e.preventDefault()
          break
        }
        case 'Enter': {
          if (results?.length <= 0) {
            break
          }

          onItemSelect(results[activeItem])

          break
        }
      }
    },
    [activeItem, onItemSelect, results],
  )

  useUpdateEffect(() => {
    setActiveItem(0)
  }, [query])

  const renderItem = useCallback(
    (item: SearchResultItem, index: number) => {
      const isLvl1 = item.type === 'lvl1'
      const mainIcon = <Icon>{isLvl1 ? <CvFillIcon /> : <CvOutlineIcon />}</Icon>

      return (
        <Command.Item
          key={item.objectID}
          className="group flex"
          data-active={index === activeItem}
          value={item.content}
          onMouseEnter={() => {
            eventRef.current = 'mouse'

            setActiveItem(index)
          }}
          onSelect={() => {
            if (eventRef.current === 'keyboard') {
              return
            }

            onItemSelect(item)
          }}
        >
          <Button
            size="lg"
            design="outlined"
            className="flex flex-grow justify-between transition-colors group-data-[active=true]:bg-main group-data-[active=true]:text-on-main-variant"
          >
            {mainIcon}

            <div className="flex flex-grow flex-col items-start">
              {!isLvl1 && <span className="text-small font-regular">{item.hierarchy.lvl1}</span>}
              <p>{item.content}</p>
            </div>

            <Icon>
              <ArrowVerticalRightIcon />
            </Icon>
          </Button>
        </Command.Item>
      )
    },
    [activeItem, onItemSelect],
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          Search... <Kbd>CMD+K</Kbd>
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content className="overflow-y-auto">
          <Command label="Search documentation..." shouldFilter={false}>
            <Dialog.Header className="!px-lg !py-xl">
              <InputGroup onKeyDown={onInputKeyDown}>
                <InputGroup.LeadingIcon>
                  <SearchIcon />
                </InputGroup.LeadingIcon>

                <Input
                  aria-label="Search documentation"
                  placeholder="Search documentation..."
                  value={query}
                  onValueChange={setQuery}
                />

                {query.length > 0 && (
                  <InputGroup.ClearButton
                    onClick={() => setQuery('')}
                    aria-label="Clear current value"
                  />
                )}
              </InputGroup>
            </Dialog.Header>

            <Dialog.Body className="!px-lg !pt-none empty:!p-none">
              {query.length > 0 && results.length > 0 && (
                <Command.List role="listbox">
                  <Command.Empty>
                    <div>
                      <p>No results for &quot;{query}&quot;</p>

                      <p className="text-default-400">
                        {query.length === 1
                          ? ' Try adding more characters to your search term.'
                          : ' Try searching for something else.'}
                      </p>
                    </div>
                  </Command.Empty>

                  <div className="flex flex-col gap-md">{results.map(renderItem)}</div>
                </Command.List>
              )}
            </Dialog.Body>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
