import React, { useState } from "react";

function SearchBox({ history, toogle, onToggleSearch }) {
    const [name, setName] = useState("");

    const submitSearchHandler = (e) => {
        e.preventDefault();
        if (name.trim()) {
            history.push(`/search/name/${name}`);
        } else {
            history.push("/");
        }
    };

    return (
        <div id="search" className={`${toogle ? "active" : ""}`}>
            <div className="search__overlay" onClick={onToggleSearch}></div>
            <form className="search__box" onSubmit={submitSearchHandler}>
                <div className="search__box-in">
                    <input
                        type="text"
                        name="search"
                        placeholder="Bạn cần tìm gì hôm nay?"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <i className="fas fa-search"></i>
                </div>
                <button
                    type="submit"
                    className="search__box-close"
                    onClick={onToggleSearch}
                >
                    <i className="fa fa-times"></i>
                </button>
            </form>
        </div>
    );
}

export default SearchBox;
