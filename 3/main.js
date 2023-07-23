const user = {
    firstName: 'Tamar',
    lastName: 'Jafaridze',
    age: 16,
    contacts: {
        facebook: 'www.facebook.com',
        gmail: {
            personalGmail: 'personal@gmail.com',
            businessGmail: 'bussiness@gmail.com'
        }
    },
    skills: ['JS', 'HTML', 'CSS']
}

async function deepCopy(user) {
    return new Promise((resolve, reject) => {
      if (typeof user === 'object' && user !== null) {
        try {
          const copiedUser = JSON.parse(JSON.stringify(user));
          resolve(copiedUser);
        } catch (error) {
          reject(new Error('Copy Failed'));
        }
      } else {
        reject(new Error('Argument is not an object'));
      }
    });
  }

async function f() {
    try {
      const copiedUser = await deepCopy(user);
      console.log('User:', user);
      console.log('Copied user:', copiedUser);
    } catch (error) {
      console.error(error.message);
    }
  }
  f();