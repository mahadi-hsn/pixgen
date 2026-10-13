"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope, PersonFill, PersonPencil } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function UpdateForm() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    await authClient.updateUser({
        name , image
    })
    console.log({ name, image });
  };
  return (
    <Modal>
      <Button variant="secondary">
        {" "}
        <PersonPencil></PersonPencil> Update profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <PersonFill className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Your Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="py-3">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="image"
                    type="url"
                    variant="secondary"
                  >
                    <Label>Image</Label>
                    <Input placeholder="Image URL" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Update
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
