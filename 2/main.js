function userPost(userId, id, title, body) {
    const div1 = document.createElement('div');
    div1.classList.add('container');
    div1.setAttribute('id', 'id')

    const div2 = document.createElement('div');
    div2.classList.add('firstLine');

    const img = document.createElement('img');
    img.setAttribute('src', 'https://tse4.mm.bing.net/th?id=OIP.1P_owTTHEgvaERzUSKRYpwHaHa&pid=Api&P=0&h=180');
    img.classList.add('img1');
    img.setAttribute('id', 'userId');
    img.setAttribute('alt', 'icon image');

    const h1 = document.createElement('h1');
    h1.classList.add('userId');
    h1.textContent = userId;

    const h2 = document.createElement('h2');
    h2.classList.add('id');
    h2.textContent = id;

    const h3 = document.createElement('h2');
    h3.classList.add('title');
    h3.textContent = title;

    const p = document.createElement('p');
    p.classList.add('body');
    p.textContent = body;

    const imgPost = document.createElement('img');
    imgPost.setAttribute('src', 'https://i0.wp.com/www.ifluenz.com/blog/wp-content/uploads/2019/11/13_best_instagram_post_ideas_for_businesses-1.jpg?zoom=1.25&resize=720%2C394&ssl=1');
    imgPost.classList.add('post-image');
    imgPost.setAttribute('alt', 'Post Image');

    div2.append(img, h1);
    div1.append(div2, h2, h3, p, imgPost);
    document.body.append(div1);
    return div1;
}


async function fechData() {
    try{
        const rowData = await fetch('https://jsonplaceholder.typicode.com/posts')
       
        if(!rowData.ok){
            throw Error('NOT GOOD REQUEST')
        }  

        const data = await rowData.json();
        data.forEach((u) => {
            const user1 = userPost(u.userId, u.id, u.title, u.body)
            document.body.append(user1)
        })
    }catch(error){
        console.log(error)
    }
}
fechData()
