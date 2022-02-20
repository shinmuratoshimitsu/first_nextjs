import React from "react"

const name = "shinji"
const list = ["1", "2", "3"]
list[0]
list[1]
list[2]
const obj = {
    id: "001",
    name: "商品1 不動産",
    industory: "hudosan",
}

const items = [{
    id: "001",
    name: "商品1 不動産",
    industory: "hudosan",
}, {
    id: "002",
    name: "商品2 不動産",
    industory: "hudosan",
}, {
    id: "003",
    name: "商品3 不動産",
    industory: "hudosan",
}, {
    id: "004",
    name: "商品4 建築",
    industory: "kentiku",
}, {
    id: "005",
    name: "商品5 建築",
    industory: "kentiku",
}, {
    id: "006",
    name: "商品6 食品",
    industory: "shokuhin",
}, {
    id: "007",
    name: "商品7 食品",
    industory: "shokuhin",
}, {
    id: "008",
    name: "商品8 食品",
    industory: "shokuhin",
}, {
    id: "009",
    name: "商品9 美容",
    industory: "biyo",
},]

// var name = "shinji";
// var name = "toshi";

// let name = "shinji";
// let name = "toshi"; // X
// name = "toshi"; // X

// const

export default function TagDemo() {
    const [selectedIndustory, setSelectedIndustory] = React.useState(null)

    function onClickFilter(industory) {
        setSelectedIndustory(industory)

        const name = "aaa";

        if (name === "aaa") {
            console.log("name is aaa")
        } else {
            console.log("name is not aaa")
        }
    }

    return (
        <div>
            <button onClick={() => { onClickFilter("hudosan") }}>不動産</button>
            <button onClick={() => { onClickFilter("kentiku") }}>建築</button>
            <button onClick={() => { onClickFilter("shokuhin") }}>食品</button>
            <button onClick={() => { onClickFilter("biyo") }}>美容</button>
            <button onClick={() => { onClickFilter(null) }}>クリア</button>

            {items.map(item => {
                return (item.industory === selectedIndustory || selectedIndustory === null) && <div>{item.name}</div>
                // return <div>{item.name}</div>
                // return <div>{item.id} {item.name}</div>
            })}
        </div>
    )
}