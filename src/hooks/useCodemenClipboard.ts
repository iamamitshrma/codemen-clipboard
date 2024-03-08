import { useEffect, useState } from "react";

function useCodemenClipboard() {
    const [copiedItems, setCopiedItems] = useState<string[]>([]);
    const [copiedItem, setCopiedItem] = useState<string>("")

    function copy(text: string) {
        navigator.clipboard.writeText(text);
        let copyItems: string[] = copiedItems;
        copyItems.push(text);
        localStorage.setItem("codemen-copied", JSON.stringify(copyItems))
        setCopiedItem(text);
        setCopiedItems([...copyItems])
    }

    function clearCopiedItem() {
        setCopiedItem("");
        navigator.clipboard.writeText("");
    }

    function clearAllCopiedItems() {
        setCopiedItems([]);
        navigator.clipboard.writeText("");
        localStorage.removeItem("codemen-copied")
    }

    function clearAll() {
        setCopiedItem("");
        setCopiedItems([]);
        navigator.clipboard.writeText("");
        localStorage.removeItem("codemen-copied")
    }


    useEffect(() => {
        const copiedData = localStorage.getItem("codemen-copied")
        if(copiedData !== null) {
            const parsedData = JSON.parse(copiedData)
            setCopiedItem(parsedData[parsedData?.length - 1])
            setCopiedItems(parsedData)
        }else {
            setCopiedItem(copiedItems[copiedItems?.length - 1])
            setCopiedItems(copiedItems);
        }
    }, [])

    return {copiedItems, copiedItem, copy, clearAll, clearAllCopiedItems, clearCopiedItem}
}

export {
    useCodemenClipboard
}