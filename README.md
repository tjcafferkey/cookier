# cookier
Simple utility function to get, set and remove cookies

## Install

```bash
npm install cookier
```

## Import

```javascript
import cookier from 'cookier';
```

## Usage

### Set cookies

```javascript
cookier('cookieOne').set('true');
```

```javascript
cookier('cookieTwo').set(JSON.stringify({
    keyOne: 'valueOne',
    keyTwo: 'valueTwo'
}));
```

### Set cookies with expiry time

```javascript
//sets a cookie with an expiry of 86400 seconds, or one day.
cookier('cookieOne').set('true', 1);
```

### Get cookies

```javascript
const cookieOne = cookier('cookieOne').get(); 
// this will equal 'true'
```

```javascript
const cookieTwo = cookier('cookieTwo').get();
// this will equal '{"key":"value"}'
```

```javascript
const cookieTwo = JSON.parse(cookier('cookieTwo').get());
/* 
this will equal:

{
    keyOne: 'valueOne',
    keyTwo: 'valueTwo'
}
*/
```

### Remove cookies

```javascript
cookier('cookieOne').remove();
```
