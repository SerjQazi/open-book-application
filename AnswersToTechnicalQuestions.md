# Answers to Technical Questions
1. How long did you spend on the coding assignment
    1. I spent about twenty hours on the coding assignment. If I had more time I would have liked to make the app more responsive for mobile using things like fluid font sizes and css clamp.
    1. I would have also liked to focus more on the UX design and try to make it more intuitive.

2. I find ternary operators to be my absolute favorite and most useful feature when using React. It allows me to keep my code clean and readable and works really well with my thought process. An example where I have used this is:

`{loading ? (
    <div className="message">
        <p>Your results are being loaded...</p>
    </div>
    ) : hasFailed ? (
    <div className="message">
        <p>Error loading data, please try again later.</p>
    </div>
    ) : result.length ? (
    <div className="bookList">
        <BookRow
        result={result}
        setResult={setResult}
        loadBookTitle={loadBookTitle}
        />
    </div>
    ) : (
    isLoaded && (
        <div className="message">
        <p>Oops! we couldn't find any results for "{userSearch}"</p>
        </div>
    )
)}`

3. In my experience so far, I have found that performance issues can come from poor data management on the backend. Several times when multiple API calls have to be made it tends to slow down the app performance, my first step would be to look at the network tab in devtools to identify which endpoints are redundant.

4. If I could improve the Open Library API, I would improve the documentation to be more detailed. I found that certain parts were lacking information.

5. 
```
{
    name: "Serj",
    age: 28,
    hobby: "gaming",
    employed: true,
    favorite_language: "React.js"
}
```
  