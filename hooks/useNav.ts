export function useNav(behavior: ScrollBehavior = "smooth") {
  return (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior,
    });
  };
}
