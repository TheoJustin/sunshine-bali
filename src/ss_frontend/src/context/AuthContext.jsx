import { createContext, useEffect, useState } from "react";
import {
  canisterId,
  createActor,
  canisterId as internetIdentityCanisterId,
} from "../../../declarations/internet_identity";
import { AuthClient } from "@dfinity/auth-client";
import { ss_backend } from "../../../declarations/ss_backend";

const defaultOptions = {
  /**
   *  @type {import("@dfinity/auth-client").AuthClientCreateOptions}
   */
  createOptions: {
    idleOptions: {
      // Set to true if you do not want idle functionality
      disableIdle: true,
    },
  },
  /**
   * @type {import("@dfinity/auth-client").AuthClientLoginOptions}
   */
  loginOptions: {
    identityProvider:
      process.env.DFX_NETWORK === "ic"
        ? "https://identity.ic0.app/#authorize"
        : `http://${internetIdentityCanisterId}.localhost:4943/`,
  },
};

/**
 *
 * @param options - Options for the AuthClient
 * @param {AuthClientCreateOptions} options.createOptions - Options for the AuthClient.create() method
 * @param {AuthClientLoginOptions} options.loginOptions - Options for the AuthClient.login() method
 * @returns
 */

export const AuthContext = createContext({});

export const AuthProvider = ({ children, options = defaultOptions }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authClient, setAuthClient] = useState(null);
  const [identity, setIdentity] = useState(null);
  const [principal, setPrincipal] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize AuthClient
    AuthClient.create(options.createOptions).then(async (client) => {
      console.log(options.loginOptions);
      updateClient(client);
    });
  }, []);

  const login = () => {
    authClient.login({
      ...options.loginOptions,
      onSuccess: () => {
        updateClient(authClient);
      },
    });
  };

  async function updateClient(client) {
    const isAuthenticated = await client.isAuthenticated();
    setIsAuthenticated(isAuthenticated);

    const identity = client.getIdentity();
    setIdentity(identity);

    const principal = identity.getPrincipal();
    setPrincipal(principal);
    console.log(principal);

    setAuthClient(client);

    const actor = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    setUser(actor);
    
  }

  async function getUser() {
    const loggedInUser = await ss_backend.getUserById(principal);
    return loggedInUser;
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        updateClient,
        isAuthenticated,
        user,
        principal,
        identity,
        getUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
