import SearchBar from "@/pages/Search/components/Searchbar";
import SearchItem from "@/pages/Search/components/SearchItem";

function Search() {
    return (
        <div className="p-6">
            <SearchBar />
            <h3 className="text-muted-foreground my-5 mb-2 text-[15px] font-semibold">
                Follow suggestions
            </h3>
            <div>
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
            </div>
        </div>
    );
}

export default Search;
