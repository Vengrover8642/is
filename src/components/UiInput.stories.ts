import UiInput from './UiInput.vue';

const meta = {
  title: 'Components/UiInput',
  component: UiInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    isDisabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;

export const Default = {
  args: {
    modelValue: '',
    placeholder: 'Введите текст',
    isDisabled: false,
  },
};

export const Disabled = {
  args: {
    modelValue: 'Заблокировано',
    placeholder: 'Не редактируется',
    isDisabled: true,
  },
};