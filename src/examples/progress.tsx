export const basic = `
<Progress
  aria-label="Loading"
  value={20}
/>
`

export const label = `
<div className="flex flex-col gap-lg">
  <Progress
    className="items-start"
    max={100}
    value={20}
  >
    <Progress.Bar />
    <Progress.Label>
      Loading
    </Progress.Label>
  </Progress>
  <Progress
    className="items-center"
    max={100}
    value={40}
  >
    <Progress.Bar />
    <Progress.Label>
      Loading
    </Progress.Label>
  </Progress>
  <Progress
    className="items-end"
    max={100}
    value={60}
  >
    <Progress.Bar />
    <Progress.Label>
      Loading
    </Progress.Label>
  </Progress>
</div>
`

export const value = `
function Example() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const step = 10;
      setValue(value => (value + step) % (100 + step));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Progress value={value}>
      <Progress.Bar />
      <Progress.Label>Loading</Progress.Label>
    </Progress>
  );
}
`

export const max = `
<Progress
  max={4}
  value={1}
>
  <Progress.Bar />
  <Progress.Label>
    Reward
  </Progress.Label>
</Progress>
`

export const valueLabel = `
<Progress value={3} max={4} getValueLabel={(value, max) => ''}>
  <Progress.Bar />

  <Progress.Label>Reward</Progress.Label>
</Progress>;
`

export const indeterminate = `
<Progress isIndeterminate>
  <Progress.Bar />
  <Progress.Label>
    Loading
  </Progress.Label>
</Progress>
`

export const visibleValue = `
function Example() {
  const value = 50;

  return (
    <Progress value={value}>
      <Progress.Bar />

      <div className="flex justify-between">
        <Progress.Label>Loading</Progress.Label>

        <span className="text-body-2 text-on-surface">{value}%</span>
      </div>
    </Progress>
  );
}
`
