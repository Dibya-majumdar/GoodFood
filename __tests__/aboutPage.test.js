import { render } from "@testing-library/react"
import About from "../src/components/About"
import { screen } from "@testing-library/react";

test("should ckcek if a input box coming or not",()=>{
    render(<About/>);
    const input1=screen.getByRole("textbox");
    expect(input1).toBeOInTheDcoument();
})