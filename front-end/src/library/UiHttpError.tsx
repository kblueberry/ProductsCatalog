export function UiHttpError({ error }: { error: Error }) {
  return <h3 className="text-center">An error occurred: ${error.message}</h3>;
}
