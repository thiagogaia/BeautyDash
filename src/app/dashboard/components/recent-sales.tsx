import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentSales() {
  const data = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      image: "https://i.imgur.com/bjFioqN.jpg",
      saleValue: "+$1,999.00",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      image: "https://i.imgur.com/bjFioqN.jpg",
      saleValue: "+$39.00",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      image: "https://i.imgur.com/bjFioqN.jpg",
      saleValue: "+$299.00",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      image: "https://i.imgur.com/bjFioqN.jpg",
      saleValue: "+$99.00",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      image: "https://i.imgur.com/bjFioqN.jpg",
      saleValue: "+$39.00",
    },
  ];

  return (
    <div className="space-y-8">
      {data.map((user) => (
        <div key={user.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.image} alt="Avatar" className="object-cover" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="ml-auto font-medium">{user.saleValue}</div>
        </div>
      ))}
    </div>
  );
}
