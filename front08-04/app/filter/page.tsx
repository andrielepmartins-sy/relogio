import { peopleList } from "../data/people.list";

export default function Filter() {

const profissao =  peopleList.filter((pessoa) => pessoa.profession === "medica");

    return(
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {profissao.map((pessoa) => (
        <div key = {pessoa.id}> {pessoa.name} - {pessoa.profession} </div>
        ))}
      </div>
    )
}
