import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'

export function RecentActivities() {
  const activities = [
    {
      title: 'Check-List',
      description: 'Sargento Silva finalizou checklist da VTR PM-0171 às 08:02',
    },
    {
      title: 'Manutenção',
      description: 'Viatura PM-0306 entrou em manutenção',
    },
    {
      title: 'Check-List',
      description:
        'Soldado Oliveira finalizou checklist da VTR PM-0307 às 10:15.',
    },
  ]

  return (
    <Box className='p-6 h-full gap-2'>
      <Text className='text-lg text-black font-bold mb-2'>
        Últimas Atividades
      </Text>
      {activities.map((item, idx) => (
        <Box
          key={idx}
          className='rounded-lg p-3 bg-white'
        >
          <Text className='font-semibold text-black text-base mb-1'>
            {item.title}
          </Text>
          <Text className='text-sm'>{item.description}</Text>
        </Box>
      ))}
    </Box>
  )
}
