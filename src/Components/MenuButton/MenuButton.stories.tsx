import { Meta, Story } from '@storybook/react'
import { expect } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import MenuButton from './MenuButton';

export default {
  component: MenuButton,

} as Meta;

const Template: Story = args => <MenuButton {...args} />
export const Default = Template.bind({})
Default.play = async ({ args, canvasElement}) => {
  const canvas = within(canvasElement);
  // await userEvent.type(canvas.getByRole('email'), 'h@h.com')
  // await userEvent.type(canvas.getByTestId('password'), 'password')
  // await userEvent.click(canvas.getByRole('button'));
  // await waitFor(() => expect(args.onSubmit).toHaveBeenCalled())
}

export const Open = Template.bind({})
Open.args = {
  isOpen: true
}
export const Close = Template.bind({})
