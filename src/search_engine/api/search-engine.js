
export const getResources = async ()=>{
    try {
        const response = await fetch(process.env.PUBLIC_URL + '/fake_data/simple_resource_data.json'); // Replace with the correct path to your data.json file
        return await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
        return [];
      }
};

// const fake_data = '[{"id":1000,"name":"John Doe","role":"Software Engineer"},{"id":2001,"name":"Jane Smith","role":"Product Manager"}]';

// export const getResources = async ()=>{
   
//     return JSON.parse(fake_data);
// };