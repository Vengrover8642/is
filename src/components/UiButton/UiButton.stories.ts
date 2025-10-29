import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './UiButton.vue';

const meta: Meta<typeof UiButton> = {
  title: 'Components/UiButton',
  component: UiButton,
  argTypes: {
    layout: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: 'Тип оформления кнопки',
    },
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit'],
      description: 'HTML-атрибут type',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Отключает кнопку',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false,
  },
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Нажми меня</UiButton>',
  }),
};

export const Secondary: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    layout: 'secondary',
  },
};

export const Disabled: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    isDisabled: true,
  },
};