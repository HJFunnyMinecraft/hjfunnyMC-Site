import { Snippet } from "@nextui-org/snippet";
import { Component } from "react";

type _State = {
  hover: boolean;
};

export class ServerUrlSnippet extends Component<{}, _State> {
  constructor(props: any) {
    super(props);
    this.state = { hover: false };
  }

  mouseEnter = () => {
    this.setState({ hover: true });
  };
  mouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <Snippet
        className="text-2xl px-4 py-4 border-secondary border-2"
        color={this.state.hover ? "default" : "secondary"}
        symbol=""
        variant="shadow"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <span style={{ fontFamily: "Mojangles" }}>mc.hjfunny.site</span>
      </Snippet>
    );
  }
}
