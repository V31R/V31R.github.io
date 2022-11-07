import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class GeometricDistribution(DistributionTemplate):
    def __init__(self):
        super(GeometricDistribution, self).__init__('Геометрическое распределение')

    def calculate(self, data: pd.Series) -> None:
        p = 0.5
        self.distribution = np.linspace(stats.bernoulli.ppf(0.01, p) * data.min(), stats.bernoulli.ppf(0.99, p) * data.max(), len(data))
        self.__mse__(data)