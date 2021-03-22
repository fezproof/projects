export const handlerPath = (context: string) => {
  // @ts-ignore
  return `${context.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}`;
};
