
import React from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

async function register(body) {
  const res = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();

  if (!res.ok) {
    throw json;
  }
  return json;
}


async function login(body) {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();

  if (!res.ok) {
    throw json;
  }
 return json;
}

async function deleteUser(id) {
    const res = await fetch(`${baseUrl}/auth/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
 
    });
  
    const json = await res.json();
  
    if (!res.ok) {
      throw json;
    }
   return  json;
  }
  



  async function updateUser(data) {
    const res = await fetch(`${baseUrl}/auth/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const json = await res.json();
  
    if (!res.ok) {
      throw json;
    }
   return  json;
  }
  
  async function getAllUsers() {
    const res = await fetch(`${baseUrl}/auth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    
    });
  
    const json = await res.json();
  
    if (!res.ok) {
      throw json;
    }
   return  json;
  }


  async function getUserByID(id) {
    const res = await fetch(`${baseUrl}/auth/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    
    });
  
    const json = await res.json();
  
    if (!res.ok) {
      throw json;
    }
   return  json;
  }
  
  
export const AuthService = { register, login,deleteUser,updateUser,getAllUsers,getUserByID };

