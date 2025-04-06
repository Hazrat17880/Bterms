import React, { useState , useEffect } from "react";
import { db} from "./Firebase";
import { getDocs , collection } from "firebase/firestore";


function Testing() {
  const [termData, setTermData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "your-collection"));
      querySnapshot.forEach((doc) => {
        setTermData(doc.data()); // Assuming there's only one term
      });
    };

    fetchData();
  }, []);

  if (!termData) return <p>Loading...</p>;
  return (
    <>
      <div className="container">
        <h2>{termData.term?.name}</h2>

        <h3>Definition</h3>
        <p>
          <strong>Technical:</strong> {termData.term?.definition?.technical}
        </p>
        <p>
          <strong>Layman:</strong> {termData.term?.definition?.layman}
        </p>

        <h3>Context & Usage</h3>
        <p>
          <strong>Area:</strong> {termData.term?.context_usage?.area}
        </p>
        <p>
          <strong>Usage:</strong> {termData.term?.context_usage?.usage}
        </p>

        <h3>Examples & Applications</h3>
        <p>
          <strong>Example:</strong>{" "}
          {termData.term?.examples_applications?.example}
        </p>
        <p>
          <strong>Case Study:</strong>{" "}
          {termData.term?.examples_applications?.case_study}
        </p>

        <h3>Related Terms & Concepts</h3>
        <p>
          <strong>Synonyms:</strong>{" "}
          {termData.term?.related_terms_concepts?.synonyms}
        </p>
        <p>
          <strong>Related:</strong>{" "}
          {termData.term?.related_terms_concepts?.related}
        </p>

        <h3>Mathematical & Analytical Aspects</h3>
        <p>
          <strong>Calculation:</strong>{" "}
          {termData.term?.mathematical_analytical_aspects?.calculation}
        </p>
        <p>
          <strong>Formula:</strong>{" "}
          {termData.term?.mathematical_analytical_aspects?.formula}
        </p>

        <h3>Legal & Ethical Considerations</h3>
        <p>
          <strong>Implications:</strong>{" "}
          {termData.term?.legal_ethical_considerations?.implications}
        </p>

        <h3>Common Misconceptions & Mistakes</h3>
        <p>
          <strong>Misconception:</strong>{" "}
          {termData.term?.common_misconceptions_mistakes?.misconception}
        </p>
        <p>
          <strong>Mistake:</strong>{" "}
          {termData.term?.common_misconceptions_mistakes?.mistake}
        </p>

        <h3>Practical Applications</h3>
        <p>
          <strong>Application:</strong>{" "}
          {termData.term?.practical_application?.application}
        </p>
        <p>
          <strong>Exercise:</strong>{" "}
          {termData.term?.practical_application?.exercise}
        </p>
      </div>
    </>
  );
}

export default Testing;
