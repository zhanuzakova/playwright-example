interface SearchFilter{
    item1: string
}

interface SearchRequestBody{
    text: string,
    filters?: SearchFilter
}