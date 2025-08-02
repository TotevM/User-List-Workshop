import CreateEdit from "./Create-edit";
import Section from "./Section";
import UserDetails from "./User-details";

export default function Main() {
    return (
        <main className='main'>
            <Section />

            <UserDetails />

            <CreateEdit />
            
            <DeleteUser />
        </main>
    );
}