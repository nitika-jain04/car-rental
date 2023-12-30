import TeamMembersUI from "./TeamMembersUI";

const membersData = [
  {
    image: "/luke.png",
    name: "Luke Miller",
    designation: "Salesman",
  },
  {
    image: "/michael.png",
    name: "Michael Diaz",
    designation: "Businss Owner",
  },
  {
    image: "/briana.png",
    name: "Briana Ross",
    designation: "Photographer",
  },
  {
    image: "/lauren.png",
    name: "Lauren Rivera",
    designation: "Car Detailist",
  },
  {
    image: "/martin.png",
    name: "Martin Rizz",
    designation: "Mechanic",
  },
  {
    image: "/caitlyn.png",
    name: "Caitlyn Hunt",
    designation: "Manager",
  },
];

export default function TeamMembers() {
  return (
    <div className="px-40 mb-40 flex flex-wrap gap-8">
      {membersData.map((data) => {
        return (
          <TeamMembersUI
            image={data.image}
            membername={data.name}
            designation={data.designation}
          />
        );
      })}
    </div>
  );
}
