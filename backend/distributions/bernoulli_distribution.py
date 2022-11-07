import numpy as np
import pandas as pd
from scipy import stats

from distributions.distribution_template import DistributionTemplate


class BernoulliDistribution(DistributionTemplate):
    def __init__(self):
        super(BernoulliDistribution, self).__init__('Распределение Бернулли')

    def calculate(self, data: pd.Series) -> None:
        p = 0.5
        self.distribution = np.linspace(stats.bernoulli.ppf(0.01, p) * data.min(), stats.bernoulli.ppf(0.99, p) * data.max(), len(data))
        self.__mse__(data)