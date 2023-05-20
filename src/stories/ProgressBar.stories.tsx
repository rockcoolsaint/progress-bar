import ProgressBar from "../components/ProgressBar";
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: "ProgressBar",
  component: ProgressBar,
} as Meta<typeof ProgressBar>

const Template: StoryFn<typeof ProgressBar> = (args) => (
  <div style={{height: '20rem'}}>
    <ProgressBar {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  percentage: 90,
  mode: "vertical",
  progressText: true,
  width: '3rem'
}

export const GreenVertical = Template.bind({})
GreenVertical.args = {
  bgColor: "green",
  percentage: 90,
  mode: "vertical",
  progressText: true,
  width: '3rem'
}

export const PurpleVertical = Template.bind({})
PurpleVertical.args = {
  bgColor: "#e916a1",
  percentage: 90,
  mode: "vertical",
  progressText: true,
  progressTextColor: "white",
  width: '3rem'
}

const Template2: StoryFn<typeof ProgressBar> = (args) => (
  <div style={{width: '20rem'}}>
    <ProgressBar {...args} />
  </div>
)


export const Horizontal = Template2.bind({})
Horizontal.args = {
  bgColor: "green",
  percentage: 90,
  mode: "horizontal",
  progressText: true,
  progressTextColor: "white"
}