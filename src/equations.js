function getRoots(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) return null;

  const sqrtOfDiscriminant = Math.sqrt(discriminant);
  return {
    x1: (-b + sqrtOfDiscriminant) / (2 * a),
    x2: (-b - sqrtOfDiscriminant) / (2 * a),
  };
}

module.exports.getRoots = getRoots;
