function makeFriendsList( friends ) {	
  const ul = document.createElement( 'ul' );
  
  const liList =  friends.map( friend => {
      let li = document.createElement('li');
      li.innerHTML = friend.firstName + " " + friend.lastName;
      return li;
  });
  
  liList.map( li => ul.append(li) ) ;
  
  return ul;
}
