export default function TechLabel ({name} : {name: string}) {
    return (
        <button className="bg-newPink/10 px-3 py-1 rounded-3xl text-newFuchsia text-sm font-bold">
            {name}
        </button> 
    )
} 