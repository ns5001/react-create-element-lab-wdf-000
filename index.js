//Code React element here

    const meInReact =
  React.createElement('div', {className: 'me'},
    React.createElement('h1', {}, 'An Awesome Person'),
    React.createElement('p', {}, 'Who is learning React'),
    React.createElement('ul', {className: 'me_interests'},
      [
        React.createElement('li', {className: 'me'}, 'JavaScript'),
        React.createElement('li', {className: 'me'}, 'React'),
        React.createElement('li', {className: 'me'}, 'Movies'),
        React.createElement('li', {className: 'me'}, 'Ice cream')
      ]
    ));


  //   const list =
  // React.createElement('div', {},
  //   React.createElement('h1', {}, 'My favorite ice cream flavors'),
  //   React.createElement('ul', {},
  //     [
  //       React.createElement('li', { class: 'brown' }, 'Chocolate'),
  //       React.createElement('li', { class: 'white' }, 'Vanilla'),
  //       React.createElement('li', { class: 'yellow' }, 'Banana')
  //     ]
  //   ));


    ReactDOM.render(
      meInReact,
    document.getElementById('main')
    );
//
//
// <div class="me">
//   <h1>An Awesome Person</h1>
//   <p>Who is learning React</p>
//
//   <ul class="me__interests">
//     <li>JavaScript</li>
//     <li>React</li>
//     <li>Movies</li>
//     <li>Ice cream</li>
//   </ul>
// </div>
