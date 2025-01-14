function compare(e1,e2)
{
    if(e1.id>e2.id)
    {
        return 1;
    }
    else{
        return -1;
    }
}

function comment(e1,e2)
{
    if(e1.comment_count>e2.comment_count)
    {
        return 1;
    }
    else{
        return -1;
    }
}
var dataArr = [
    {
      "userId": 1,
      "id": 10,
      "title": "Introduction to Artificial Intelligence",
      "body": "Learn the basics of Artificial Intelligence and its applications in various industries.",
      "link": "https://example.com/article1",
      "comment_count": 8
    },
    {
      "userId": 2,
      "id": 2,
      "title": "Web Development with React",
      "body": "Build modern web applications using React.js and explore its powerful features.",
      "link": "https://example.com/article2",
      "comment_count": 12
    },
    {
      "userId": 3,
      "id": 30,
      "title": "Data Science Fundamentals",
      "body": "Dive into the world of Data Science and discover how to analyze and interpret data.",
      "link": "https://example.com/article3",
      "comment_count": 5
    },
    {
      "userId": 4,
      "id": 41,
      "title": "Machine Learning Algorithms",
      "body": "Explore various Machine Learning algorithms and understand their workings.",
      "link": "https://example.com/article4",
      "comment_count": 17
    },
    {
      "userId": 5,
      "id": 51,
      "title": "Introduction to Blockchain",
      "body": "Learn about Blockchain technology, its use-cases, and how it ensures secure transactions.",
      "link": "https://example.com/article5",
      "comment_count": 3
    },
    {
      "userId": 6,
      "id": 16,
      "title": "iOS App Development",
      "body": "Get started with iOS app development using Swift and create feature-rich applications.",
      "link": "https://example.com/article6",
      "comment_count": 10
    },
    {
      "userId": 7,
      "id": 77,
      "title": "Python for Data Analysis",
      "body": "Utilize Python libraries like Pandas and NumPy for data manipulation and analysis.",
      "link": "https://example.com/article7",
      "comment_count": 15
    },
    {
      "userId": 8,
      "id": 81,
      "title": "Cybersecurity Best Practices",
      "body": "Learn essential cybersecurity practices to safeguard your digital assets.",
      "link": "https://example.com/article8",
      "comment_count": 6
    },
    {
      "userId": 9,
      "id": 19,
      "title": "Cloud Computing Essentials",
      "body": "Understand the fundamentals of Cloud Computing and its benefits for businesses.",
      "link": "https://example.com/article9",
      "comment_count": 9
    },
    {
      "userId": 10,
      "id": 110,
      "title": "Introduction to UX Design",
      "body": "Discover the principles of User Experience (UX) design and create intuitive user interfaces.",
      "link": "https://example.com/article10",
      "comment_count": 21
    }
  ];
console.log(dataArr.sort(compare));
console.log(dataArr.sort(comment));