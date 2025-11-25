import UiSelect from './UiSelect.vue';

const meta = {
  title: 'Components/UiSelect',
  component: UiSelect,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    options: { control: 'object' },
  },
};

export default meta;

export const Default = {
  args: {
    modelValue: 'Опция 1',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    modelValue: 'Опция 1',
    options: ['Опция 1', 'Опция 2'],
    isDisabled: true,
  },
};