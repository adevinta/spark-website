export const basic = `
<Drawer>
  <Drawer.Trigger asChild>
    <Button>Open</Button>
  </Drawer.Trigger>

  <Drawer.Portal>
    <Drawer.Overlay />

    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title>Title</Drawer.Title>
      </Drawer.Header>

      <Drawer.Body>
        <Drawer.Description>Description</Drawer.Description>
      </Drawer.Body>

      <Drawer.Footer className="flex justify-end gap-md">
        <Button intent="neutral" design="outlined">
          Cancel
        </Button>
        <Button>Submit</Button>
      </Drawer.Footer>

      <Drawer.CloseButton aria-label="Close edit profile" />
    </Drawer.Content>
  </Drawer.Portal>
</Drawer>;
`;
