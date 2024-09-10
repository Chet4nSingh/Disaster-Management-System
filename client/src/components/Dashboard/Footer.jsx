export default function Footer() {
  return (
    <section className="py-4 px-8 h-3/4 grid grid-cols-3 gap-4 mt-4">
      <a className="flex justify-between border border-dark-purple-x rounded-3xl items-center font-bold p-8 box-border cursor-pointer text-right py-4 text-dark-purple text-3xl group">
        <i className="fas fa-exclamation-triangle mr-2 text-[#FF6347] text-6xl group-hover:scale-110 duration-100"></i>
        <span>Report A Disaster</span>
      </a>
      <a className="flex justify-between border border-dark-purple-x rounded-3xl items-center font-bold p-8 box-border cursor-pointer text-right py-4 text-dark-purple text-3xl group">
        <i className="fas fa-list mr-2 text-[#1E90FF] text-6xl group-hover:scale-110 duration-100"></i>
        <span>Alert List</span>
      </a>

      <a className="flex justify-between border border-dark-purple-x rounded-3xl items-center font-bold p-8 box-border cursor-pointer text-right py-4 text-dark-purple text-3xl group">
        <i className="fas fa-hands-helping mr-2 text-[#FFD700] text-6xl group-hover:scale-110 duration-100"></i>
        <span>Rescue Together</span>
      </a>
    </section>
  );
}

{
  /* <a className="flex justify-between items-center font-bold p-8 box-border cursor-pointer hover:border-b-2 border-dark-purple text-right py-4 text-dark-purple text-3xl group">
        <i className="fas fa-hand-holding-heart mr-2 text-[#32CD32] text-6xl group-hover:scale-110 duration-100"></i>
        <span>Donate To Rescue Camps</span>
      </a>
      <a className="flex justify-between items-center font-bold p-8 box-border cursor-pointer hover:border-b-2 border-dark-purple text-right py-4 text-dark-purple text-3xl group">
        <i className="fas fa-hands-helping mr-2 text-[#FFD700] text-6xl group-hover:scale-110 duration-100"></i>
        <span>Volunteer</span>
      </a> */
}
