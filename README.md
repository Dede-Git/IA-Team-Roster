# Team Roster

[View The App Here](https://team-roster-fightgoats.netlify.app/)

## Get Started

- [React Template Startup Readme](./templateReadMe.md)
- Or You can clone it and start editing here

`$ git clone git@github.com:Dede-Git/IA-Team-Roster.git`

`$ cd IA-Team-Roster`

`$ npm run dev`

## About the user

- The ideal user for Team Roster is some who loves the great fighters past or present and wants to build a library of their favorites
- User has images Of The fighters and will be able to put them in a lead goat category

## Features

- Full CRUD
- Searches Fighters
- Can add Goats into Lead Goats by making them a favorite

## Relevant Links

- [Check out the deployed site](https://team-roster-fightgoats.netlify.app/)

## Code Snippet

```
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={fighterObj.image} alt={fighterObj.first_name} style={{ height: '300px' }} />
      <Card.Body>
        <Card.Title>{fighterObj.first_name}</Card.Title>
        <Card.Title>{fighterObj.last_name}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE FIGHT DETAILS  */}
        <Link href={`/fighter/${fighterObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE FIGHT DETAILS  */}
        <Link href={`/fighter/edit/${fighterObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisFighter} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );

### Tech/framework used
**Built with**
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### API Reference
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

## Creator

- [DeAndre Hill (Dede)](https://github.com/Dede-Git)
```
