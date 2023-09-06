import { cx } from "class-variance-authority";
import { PropsWithChildren, ReactNode } from "react";
import { InlineCode } from '@/components/MDX/InlineCode'

interface Props {
  docgen: any;
}

const PropData = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex gap-xl">
      <p className="font-bold">{title}</p>
      <p>{children}</p>
    </div>
  );
};


const codeStyles = cx(
  "h-fit inline-block whitespace-nowrap rounded-small bg-transparent px-none py-none",
  "font-mono text-small font-regular text-info"
)

const Code = ({ children }: PropsWithChildren) => {
  return (<code className={codeStyles}>{children}</code>)
}

const PropType = ({ propType }: { propType: any }) => {
  if (propType.name === 'enum') {
    return propType.value.map(({ value }, i) => {
      return (
        <>
          {i > 0 && ' | '}
          <InlineCode key={i}>{value}</InlineCode>
        </>
      )
    })
  }

  return <InlineCode>{propType.name}</InlineCode>
}

const Cell = ({ children }: PropsWithChildren) => {
  return (
    <td className={cx(
      "p-md text-body-2 p-2 max-w-[200px] overflow-auto whitespace-normal break-normal",
    )}>
      {children}
    </td>
  )
}

const HeadingCell = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <td className={cx(
      "text-left p-md bg-neutral-container text-on-neutral-container font-bold text-body-2",
      className,
    )}>
      {children}
    </td>
  )
}

export const ComponentProps = ({ docgen }) => {
  if (!docgen) {
    return (
      <div className="mb-3xl px-xl py-lg rounded-md bg-error-container text-on-error-container font-bold">
        <p>Error: props data cannot be retrieved</p>
      </div>
    )
  }
  if (!Object.keys(docgen.props).length) {
    return (
      <div className="mb-3xl px-xl py-lg rounded-md bg-alert-container text-on-alert-container font-bold">
        <p>This component does not have any props</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto overflow-y-hidden mb-3xl">
      <table className="border-collapse border-spacing-0 w-full">
        <thead>
          <tr>
            <HeadingCell className="rounded-l-md">Attribute</HeadingCell>
            <HeadingCell>Type</HeadingCell>
            <HeadingCell>Description</HeadingCell>
            <HeadingCell className="rounded-r-md">Default</HeadingCell>
          </tr>
        </thead>

        <tbody>
          {Object.entries(docgen.props).map((prop) => {
            const [name, data] = prop as any;

            return (
              <tr key={name} className=" [&:nth-child(even)]:bg-background-variant">
                {/* Attribute */}
                <Cell>
                  {name}{data.required ? "*" : ""}
                </Cell>

                {/* Type */}
                <Cell >
                  <PropType propType={data.type} />
                </Cell>

                {/* Description */}
                <Cell>
                  {data.description || "-"}
                </Cell>

                {/* Default */}
                <Cell>
                  <InlineCode>
                    {data.defaultValue?.value || JSON.stringify(data.defaultValue)}
                  </InlineCode>
                </Cell>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
