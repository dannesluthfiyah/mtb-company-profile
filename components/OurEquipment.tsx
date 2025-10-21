import Image from "next/image";

interface Equipment {
  id: number;
  name: string;
  image: string;
  color: string;
}

const equipmentList: Equipment[] = [
  {
    id: 1,
    name: "FOCO TRUCK HINO 500 (8 TON)",
    image: "/equipment/foco-hino-merah.jpg",
    color: "bg-[#C91A34]",
  },
  {
    id: 2,
    name: "HIGH BED TRILLER HOWO NX 360",
    image: "/equipment/highbed-triller.jpg",
    color: "bg-[#075585]",
  },
  {
    id: 3,
    name: "FOCO TRUCK HINO 500 (8 TON)",
    image: "/equipment/foco-hino-hijau.jpg",
    color: "bg-[#78975B]",
  },
  {
    id: 4,
    name: "FOCO TRUCK PUSO 220 PS",
    image: "/equipment/foco-puso.jpg",
    color: "bg-[#BD6F3B]",
  },
  {
    id: 5,
    name: "LOWBED VOLVO FM 380",
    image: "/equipment/lowbed-volvo.jpg",
    color: "bg-[#80878C]",
  },
  {
    id: 6,
    name: "WATER TANK 150BBLS",
    image: "/equipment/water-tank.jpg",
    color: "bg-[#792835]",
  },
];

export default function OurEquipment() {
  return (
    <section
      id="equipment"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#fff5f5] to-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#9b1c1c] mb-16">
          OUR EQUIPMENT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {equipmentList.map((item) => (
            <div
              key={item.id}
              className={`${item.color} text-white rounded-[30px] p-6 w-[90%] md:w-[85%] max-w-[420px] shadow-md hover:scale-[1.02] transition-transform`}
            >
              <div className="bg-white/15 rounded-[20px] py-4 px-6 mb-6 text-center font-bold text-lg md:text-xl uppercase">
                {item.name}
              </div>

              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={380}
                  height={280}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
