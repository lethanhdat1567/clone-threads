import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import Filter from "@/pages/Search/components/Searchbar/Filter";
import { SearchIcon } from "lucide-react";

function SearchItem() {
    return (
        <InputGroup className="bg-muted rounded-2xl px-2 py-6">
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
            <Filter />
        </InputGroup>
    );
}

export default SearchItem;
