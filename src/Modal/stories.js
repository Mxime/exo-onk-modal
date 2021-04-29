import React from "react";
import { storiesOf } from "@storybook/react";
import { Typography, Button } from "@ornikar/kitt";
import Modal from ".";

storiesOf("Modal", module).add("Default", () => (
  <Modal show>
    <Modal.Header>
      <Typography.h2>Titre</Typography.h2>
    </Modal.Header>
    <Modal.Body>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button>Valider</Button>
      <Button>Valider</Button>
    </Modal.Footer>
  </Modal>
));
