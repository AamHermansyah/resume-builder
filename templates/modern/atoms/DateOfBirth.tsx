function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  
  const formattedDate = new Intl.DateTimeFormat('en-US', 
    { day: '2-digit', month: 'long', year: 'numeric' }
  )
  .format(new Date(`${year}-${month}-${day}`));
  
  return formattedDate;
}

export const DateOfBirth = ({ dob }: { dob: string }) => {
  return (
    <span className="block -mt-0.5 text-xs">
      Date of Birth: {formatDate(dob)}
    </span>
  )
}