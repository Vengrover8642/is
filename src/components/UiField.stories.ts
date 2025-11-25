import UiField from './UiField.vue';

const meta = {
  title: 'Components/UiField',
  component: UiField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
};

export default meta;

export const WithLabel = {
  args: {
    label: 'E-mail',
  },
};

export const WithoutLabel = {
  args: {
    label: '',
  },
};