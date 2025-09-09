import { Text, TouchableOpacity } from 'react-native'

interface Props {
  label: string
  ativo: boolean
  onPress: () => void
}

export function FilterItem({ label, ativo, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 rounded-full mr-2 ${
        ativo ? 'bg-green-200' : 'bg-[#E8EFE9]'
      }`}
    >
      <Text
        className={`text-sm ${ativo ? 'font-bold text-green-800' : 'text-black'}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
