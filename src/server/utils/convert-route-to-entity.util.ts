const mapping: Record<string, string> = {
  attachments: 'attachment',
  comments: 'comment',
  organizations: 'organization',
  projects: 'project',
  tasks: 'task',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
