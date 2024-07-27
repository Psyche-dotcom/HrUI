const CreateStep4 = ({ data }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Review Information</h2>
    <div>
      <strong>Full Name:</strong> {data.fullName}
    </div>
    <div>
      <strong>Gender:</strong> {data.gender}
    </div>
    <div>
      <strong>Mobile Phone:</strong> {data.mobilePhone}
    </div>
    <div>
      <strong>Email:</strong> {data.email}
    </div>
    <div>
      <strong>Date of Birth:</strong> {data.dateOfBirth.split("T")[0]}
    </div>
    <div>
      <strong>Social Security Number:</strong> {data.socialSecurityNumber}
    </div>
    <div>
      <strong>Marital Status:</strong> {data.maritalStatus}
    </div>
    <div>
      <strong>Home Address:</strong> {data.homeAddress}
    </div>
    <div>
      <strong>Home Phone:</strong> {data.homePhone}
    </div>
    <div>
      <strong>Job Title:</strong> {data.jobTitle}
    </div>
    <div>
      <strong>Department:</strong> {data.department}
    </div>
    <div>
      <strong>Manager:</strong> {data.manager}
    </div>
    <div>
      <strong>Employment Type:</strong> {data.employmentType}
    </div>
    <div>
      <strong>Employment Status:</strong> {data.employmentStatus}
    </div>
    <div>
      <strong>Start Date:</strong> {data.startDate.split("T")[0]}
    </div>
    <div>
      <strong>Work Location:</strong> {data.workLocation}
    </div>
    <div>
      <strong>Ethnicity:</strong> {data.ethnicity}
    </div>
    <div>
      <strong>Veteran Status:</strong> {data.veteranStatus}
    </div>
    <div>
      <strong>Disability Status:</strong> {data.disabilityStatus}
    </div>
    <div>
      <strong>Notes:</strong> {data.notes}
    </div>
  </div>
);

export default CreateStep4;
