export type Notification = {
  id: string;
  title: string;
  description: string;
  avatar: string;
  createdAt: string; 

};

export const mockNotifications: Notification[] = [
  {
    id: "1",
    title: "Viaturas de Praia  ",
    description: "Pegar apenas a PM_0301",
    avatar: "https://i.pravatar.cc/150?img=1",
    createdAt: "2025-09-10 18:45",

  },
  {
    id: "2",
    title: "Manutenção Viatura PM-0213",
    description: "maria@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    createdAt: "2025-09-10 18:45",
  },
  {
    id: "3",
    title: "Aviso viatura PM-0302",
    description: "Essa viatura apresentou problemas no nivel de arrefecimento, olhar líquido mais vezes.",
    avatar: "https://i.pravatar.cc/150?img=3",
    createdAt: "2025-09-10 18:45",
  }
];