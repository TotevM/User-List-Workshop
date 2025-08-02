import SearchBar from "./Search-bar";
import Table from "./Table";
import TableRow from "./Table-row";

export default function Section() {
    return <section className="card users-container">
        <SearchBar />
        <Table />


      <button className="btn-add btn">Add new user</button>
    </section>
}