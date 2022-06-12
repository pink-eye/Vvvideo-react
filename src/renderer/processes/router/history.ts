import { createMemoryHistory, ReactLocation } from "@tanstack/react-location";

const history = createMemoryHistory({ initialEntries: ['/'] });

export const location = new ReactLocation({ history });
