import axios from 'axios'
import jwt_decode from 'jwt-decode';


const apiUrl = 'http://localhost:3000/api'

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Creating a user
export async function createUser(user) {
     const response = await axios.post(`/users`, user);
        return response.data;
  }


export async function gettingUser(userId) {
    const response = await axios.get(`/users/me`,userId);
       console.log(response.data);
 }

// Creating a Task and adding it to a learning group
export async function createTask({task, token, lgroupId}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.post(`/tasks`, {task, lgroupId});
    return response.data;
 }

 // To delete Lgroup
 export async function deletingLgroup({lgroupId, token}){
     axios.defaults.headers['x-auth-token']= token
     const response = await axios.delete(`/lgroups/${lgroupId}`)
     return response.data;
 }

 // To delete task
 export async function deletingTask({taskId, token}){
    axios.defaults.headers['x-auth-token']= token
    const response = await axios.delete(`/tasks/${taskId}`)
    return response.data; // this receives the deleted task
}


export async function gettingTask(taskId) {
    const response = await axios.get(`${apiUrl}/tasks`, taskId);
       return response.data;
 }
  
// To create learning group
export async function createLgroup({lgtitle, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.post(`/lgroups`, {lgtitle});
        console.log(response)
       return response.data; // response.data = object of learning group created
 }

 // To join Learning group
 export async function joinLgroup({lgCode, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.put(`/lgroups/${lgCode}`);
        console.log('I this object of array', response.data) //////////////////////////////////////////////////////////////////////////
       return response.data; // this should be array of learning groups that the user belong
 }
 
// To get learning group
export async function gettingLgroup(lgroupId) {
    const response = await axios.get(`/lgroups/${lgroupId}`);

       return response.data; // this should be array of learning groups that the user belong
 }

 // To get learning groups
export async function receivingLgroups({userId, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.get(`/lgroups/${userId}`);
       return response.data; // this should be array of learning groups that the user belong
 }

  // To get tasks of a user 
 export async function receivingTasks({userId, token}) {
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.get(`/tasks/${userId}`);
        console.log('From Api:', response.data)
       return response.data; // this should be array of tasks from the classes that user belong
 }

 // To update task with answer from a specific user
 export async function addingScoreHistoryToTasks({taskyId, timeDuration, correctedQuestionArray, token}){
    axios.defaults.headers['x-auth-token'] = token
    const response = await axios.put(`/tasks/${taskyId}`, {taskyId, timeDuration, correctedQuestionArray})
    return response.data
 }
 // To login User
export async function loginUser(user) {
    const response = await axios.post(`/auth`, user);
       const token = response.data
       console.log('Wish to see this:', decodeToken(token))
       const { username, _id } = decodeToken(token)
       return {username, _id, token} 
 }

 // to decoed token
function decodeToken (token){
    const decoded = jwt_decode(token);
    return decoded
}
