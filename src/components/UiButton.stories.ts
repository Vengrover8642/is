import UiButton from './UiButton.vue';

const meta = {
  title: 'Components/UiButton',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    isDisabled: { control: 'boolean' },
    type: { control: 'select', options: ['submit', 'button'] },
  },
};

export default meta;

export const Primary = {
  args: {
    layout: 'primary',
    isDisabled: false,
    type: 'button',
  },
};

export const Secondary = {
  args: {
    layout: 'secondary',
    isDisabled: false,
    type: 'button',
  },
};

export const Disabled = {
  args: {
    layout: 'primary',
    isDisabled: true,
    type: 'button',
  },
};